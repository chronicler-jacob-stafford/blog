type DateProps = {
  date: Date;
}
export default function Date({ date } : DateProps) {

  const dateString = date.toLocaleDateString("en-US",  {
      day: "2-digit",
      month: "long", 
      year: "numeric"
    }
  );

  return (
    <p className="text-xl text-muted-foreground">
      {dateString}
    </p>
  )
}