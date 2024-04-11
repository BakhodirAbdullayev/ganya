import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-10 flex-col gap-10">
      <h2 className="text-3xl text-main-300 font-bold">Template Buttons</h2>
      <div className="flex flex-col justify-center gap-5">
        <Button>default</Button>

        <Button variant={"outline"}>outline</Button>
        <Button
          variant={"outline"}
          className="text-csneutral-500 border-csneutral-500 hover:bg-csneutral-100/80"
          rounded={"full"}
        >
          outline neutral
        </Button>
        <div
          className={buttonVariants({
            variant: "main",
          })}
        >
          text
        </div>
        <div
          className={buttonVariants({
            variant: "filled",
          })}
        >
          text
        </div>
        <Button variant={"main"}>main</Button>
        <Button variant={"filled"}>filled</Button>
      </div>
    </div>
  );
}
