import Job from "@/types/Job";
import { Badge } from "../ui/badge";


export default function JobSnippet(props: Job) {
    const { title, date, description, tags, company, logo} = props;

    return (
        <div className="flex  gap-2">
            <p className="align-top font-thin text-gray-500 text-xs">{date}</p>

            <div className="flex flex-col w-full gap-0">
                <div className="flex flex-col gap-0"> 
                    <h2>{title}</h2>
                    <div className="flex gap-2 justify-between items-center"> 
                        <h3>{company}</h3>    
                        <img
                            src={logo}
                            className="h-[25px]"
                        />
                    </div>
                </div>

                <p>{description}</p>

                <div className="flex gap-2 overflow-auto mt-6">
                    {tags?.map((tag: string, i: number) => (
                        <Badge variant={i == 0 ? 'default' : 'secondary'} id={i.toString() }>
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}
