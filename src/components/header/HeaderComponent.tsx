import Link from "next/link";
import { useContext } from "react";
import { WindowPropertiesContext } from "~/context/WindowPropertiesContext";
import HeaderButtonComponent, {
  HeaderCircleButton,
} from "./HeaderButtonComponent";
import { signOut, useSession } from "next-auth/react";
import { getUserImagePath } from "~/utils/publicPathUtils";

const HeaderComponent: React.FC = () => {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full gap-2 bg-white p-2 text-2xl drop-shadow-md">
      <HeaderButtonComponent label="Inicio" href="/" />
      <HeaderButtonComponent
        label="Categorias"
        menuContent={
          <div className="flex flex-col items-center gap-2 p-2 text-xl">
            <button className="w-fit border-b border-transparent px-4 py-2 duration-75 hover:border-black/30">
              Vestidos
            </button>
            <button className="w-fit border-b border-transparent px-4 py-2 duration-75 hover:border-black/30">
              Camisetas
            </button>
            <button className="w-fit border-b border-transparent px-4 py-2 duration-75 hover:border-black/30">
              Calçados
            </button>
          </div>
        }
      />
      <HeaderCircleButton
        href="/login"
        className="ml-auto"
        menuClassName="right-0"
        menuContent={
          session?.user ? (
            <div className="flex flex-col items-center gap-2  p-2 text-xl">
              <p className="whitespace-nowrap border-b p-2">
                Carrinho de compras
              </p>
              <div className="flex flex-col gap-4 whitespace-nowrap p-2 text-center text-lg text-gray-500">
                Nada adicionado ainda...
                <Link
                  href={"/"}
                  className="w-full rounded-md bg-gray-700 p-2 text-center text-white"
                >
                  Procurar produtos
                </Link>
              </div>
            </div>
          ) : undefined
        }
      />
      <HeaderCircleButton
        href="/login"
        menuClassName="right-0"
        src={
          session ? `/${getUserImagePath(session?.user.id, true)}` : undefined
        }
        menuContent={
          session?.user ? (
            <div className="flex flex-col items-center gap-2 p-2 text-xl">
              <Link
                href="/config"
                className=" w-full rounded-md border-b border-transparent px-4 py-2 duration-75 hover:bg-gray-200 "
              >
                Configurações
              </Link>
              <button
                onClick={() => {
                  signOut();
                }}
                className=" w-full rounded-md border-b border-transparent px-4 py-2 duration-75 hover:bg-gray-200"
              >
                Sair
              </button>
            </div>
          ) : undefined
        }
      />
    </header>
  );
};
export default HeaderComponent;
