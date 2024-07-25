import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="grid place-items-center grid-flow-col gap-3"
          >
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className={cn("group relative")}>
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                {/* <b>{items.length}</b> */}
              </div>
              <ArrowRight
                size={20}
                className="absolute right-3 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
