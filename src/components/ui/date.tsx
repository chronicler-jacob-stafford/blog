import { cn } from "@/lib/utils";

type DateProps = {
  date: Date;
  className?: string;

}
export default function Date({ date, className } : DateProps) {

  const dateString = date.toLocaleDateString("en-US",  {
      day: "2-digit",
      month: "long", 
      year: "numeric"
    });
    
    return (
      <p className={cn("text-xl text-muted-foreground", className)}>
        {dateString}
      </p>
    );
  }


