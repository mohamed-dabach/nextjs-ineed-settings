import Link from "next/link";

export default function Page() {
  return (
    <h1 className=" p-4">
      Visit the{" "}
      <Link className="text-blue-600 underline" href="/settings/account">
        Settings page
      </Link>
      !
    </h1>
  );
}
