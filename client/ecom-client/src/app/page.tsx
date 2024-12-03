"use client"

import { PromotionBanner } from "./components/main_page/PromotionBanner";
import { PromotionList } from "./components/main_page/PromotionList";
import { ItemsList } from "./components/main_page/ItemsList";
import { ItemData, ItemEntry } from "./components/main_page/item_list/ItemEntry";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useFetch from "./hooks/UseFetch";
import { SpinLoader } from "./components/skeleton/SpinLoader";
import { getUserInfo, JwtUserPayload } from "./utils/auth";
import { useUserData } from "./hooks/UserDataContext";

var CURRENT_USER: JwtUserPayload | null;

export default function Home() {
  const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
  const CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
  const NEXT_PUBLIC_COGNITO_CLIENT_SECRET = process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const router = useRouter();

  const { userData, setUserData } = useUserData();

  useEffect(() => {
    const exchangeCodeForTokens = async (code: string) => {
      const response = await fetch(`${COGNITO_DOMAIN}/oauth2/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: '' + CLIENT_ID,
          client_secret: '' + NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
          redirect_uri: '' + REDIRECT_URI,
          code: code,
        })
      });

      const data = await response.json();

      if (response.ok) {
        const { access_token, id_token } = data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('id_token', id_token);

        const currentUser: JwtUserPayload | null = getUserInfo(id_token);

        console.log(currentUser);

        if (currentUser) {
          setUserData({
            id: "001",
            name: currentUser.name,
            avatarUrl: `https://ui-avatars.com/api/?name=${currentUser.name}`
          });
        }

        router.push('/');
      } else {
        console.log("Failed to get tokens", data);
      }
    }

    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
      exchangeCodeForTokens(code);
    }
  }, [router]);

  let { data, loading, error } = useFetch<ItemData[]>("http://localhost:5142/cheat/nearbyitems");

  let nearbyItemsData: ItemData[] | null = data;
  if (!nearbyItemsData) {
    nearbyItemsData = [];
  }

  return (
    <div className="h-fit min-h-screen">
      <PromotionBanner />
      <PromotionList />
      <div className="f-full">
        {data ?
          <ItemsList title={"Món ngon gần đây"} items={[...nearbyItemsData.map(item => {
            return (
              <ItemEntry itemData={item} ></ItemEntry>
            )
          })]} />
          :
          loading ?
            <div className="flex justify-center items-center m-auto h-52 bg-slate-100">
              <SpinLoader />
            </div>
            :
            <p>Errors: {error}</p>
        }
      </div>
    </div>
  );
}
