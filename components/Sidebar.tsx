import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="p-4 flex flex-col gap-2">
      <h3 className="text-xl font-bold">Smart Contract</h3>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/docs/smart-contract/create-token/ethereum">
            Ethereum Token
          </Link>
        </li>
        <li>
          <Link href="/docs/smart-contract/create-token/icp">ICP Token</Link>
        </li>
      </ul>
      <h3 className="text-xl font-bold">Integration</h3>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/docs/integration/connect-wallet/metamask">
            Metamask Integration
          </Link>
        </li>
      </ul>
    </aside>
  );
}
