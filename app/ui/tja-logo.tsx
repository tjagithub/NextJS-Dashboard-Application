import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function TJALogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">TJA Company</p>
    </div>
  );
}

//sql postgres change a user email in column email where column name is User
`
UPDATE users
SET email = $1
WHERE name = $2
`