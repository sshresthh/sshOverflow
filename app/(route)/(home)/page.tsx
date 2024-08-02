import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
};
export default Home;
