import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { WindowPropertiesProvider } from "~/context/WindowPropertiesContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <WindowPropertiesProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </WindowPropertiesProvider>
  );
};

export default api.withTRPC(MyApp);
