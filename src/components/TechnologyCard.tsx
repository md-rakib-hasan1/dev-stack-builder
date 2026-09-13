import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isAdded: boolean;
}

const TechnologyCard = ({ technology, onAdd, isAdded }: TechnologyCardProps) => {
    return (
        <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">


            <div className="flex items-start justify-between">


                <div className="flex h-9 w-9 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="h-7 w-7 object-contain"
                    />
                </div>


                <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-medium text-orange-500">
                    {technology.badge}
                </span>
            </div>


            <h3 className="mt-4 text-base font-semibold text-slate-900">
                {technology.name}
            </h3>


            <p className="mt-2 min-h-[58px] text-xs leading-5 text-slate-500">
                {technology.description}
            </p>



            <div className="mt-4 flex items-center justify-between gap-2">


                <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
                    {technology.category}
                </span>


                <span className="text-[10px] text-slate-500">
                    {technology.difficulty}
                </span>


                <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-500">★</span>

                    <span className="text-xs font-medium text-slate-600">
                        {technology.rating}
                    </span>
                </div>

            </div>


            <button
                type="button"
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`mt-3 w-full rounded-md px-4 py-2.5 text-xs font-medium transition duration-300 ${isAdded
                        ? "cursor-not-allowed bg-slate-200 text-slate-500"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechnologyCard;