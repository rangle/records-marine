import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, BookmarkIcon } from "lucide-react";

const demo = {
  name: "TOTAL MARINE SOLUTIONS INC.",
  email: " INFO@TMS-FLA.COM",
  phone: "+1 (954) 327-2032",
  website: "www.tms-fla.com/",
  location: "United States",
  address:
    " 2800 W STATE ROAD 84, SUITE 111,FORT LAUDERDALE, FL 33312 United States",
  about_us:
    "Total Marine Solutions was established in 2000 with a specific mission to supply environmental products and services with a commitment to customer service and consistent, reliable support.\n\nBringing over twenty years of support expertise in both the sales and purchasing functions of ship operations, the management team at TMS maintains a mindset of ensuring a heightened standard of service excellence. This standard motivates our processes and overall way of doing business.",
};

export function SupplierCard() {
  return (
    <Card className="m-4 min-w-80 p-4 border-[#E4E4E4] rounded-3xl">
      <CardContent>
        <div className="flex gap-[10px]">
          <div>
            <LogoAvatar />
          </div>
          <div className="flex flex-col gap-8">
            <SupplierCardHeader />
            <div className="flex flex-row">
              <div className="flex flex-col gap-4">
                <ProductBadgeList />
                <CompanyDetails
                  title="Company Details"
                  description={demo["about_us"]}
                />
              </div>
              <div id="side-bar">

              </div>
            </div>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

export function LogoAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export function CompanyDetails(props: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-0.5 py-2">
      <h2 className="text-base text-muted-foreground">{props.title}</h2>
      <p className="text-base font-normal">{props.description}</p>
    </div>
  );
}

export function ProductBadgeList() {
  return (
    <>
      <div className="flex flex-row gap-4">
        <span className="text-base font-medium">Products</span>
        <div className="flex flex-inline flex-row gap-2">
          <Badge variant="secondary">Product 1</Badge>
          <Badge variant="secondary">Product 2</Badge>
          <Badge variant="secondary">Product 3</Badge>
        </div>
      </div>
    </>
  );
}

export function SupplierCardHeader() {
  return (
    <>
      <div className="flex flex-row place-content-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{demo["name"]}</h1>
          <div className="flex flex-row gap-2">
            <span>
              <MapPinIcon />
            </span>
            <span className="text-sm text-muted-foreground underline">
              {demo["location"]}
            </span>
            <span className="text-sm text-muted-foreground underline">|</span>
            <span className="text-sm text-muted-foreground underline">
              {demo["address"]}
            </span>
          </div>
        </div>
        <BookmarkIcon size={24} />
      </div>
    </>
  );
}

export function ContactItem ({ icon, text, label }: { icon: React.ReactNode, label: string, text: string }) {
  return (
    <div className="flex flex-row gap-2">
      <h2 className="">{label}</h2>
      <span className="text-sm text-muted-foreground">{text}</span><span>{icon}</span>
    </div>
  );
}
