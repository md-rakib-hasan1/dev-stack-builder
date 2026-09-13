import type { Technology } from "../types/technology";

interface StackSidebarProps {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}
const StackSidebar = ({ stack, onRemove,
    onRemoveAll, }: StackSidebarProps) => {

    return (
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4">


            <div>
                <h2 className="text-base font-semibold text-slate-900">
                    Your Stack
                </h2>



                <p className="mt-1 text-xs text-slate-500">
                    {stack.length} Technology Selected
                </p>
            </div>

            {stack.length === 0 ? (<div className="mt-5 flex min-h-24 items-center justify-center rounded-lg border border-dashed border-slate-200 px-4 text-center">
                <p className="text-xs text-slate-400">
                    Your stack is empty.
                </p>
            </div>) : (<div className="mt-5 space-y-2">{
                stack.map((technology) => (<div key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 p-2.5">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="h-7 w-7 object-contain"
                    />
                    {/* Technology Info */}
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-xs font-semibold text-slate-800">
                            {technology.name}
                        </h3>

                        <p className="text-[10px] text-slate-400">
                            {technology.category}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemove(technology.id)}
                        className="text-xs font-medium text-red-500 hover:text-red-700"
                    >
                        ✕
                    </button>

                    

                </div>))}

            </div>)}

            {stack.length > 0 && (
                        <button
                            type="button"
                            onClick={onRemoveAll}
                            className="mt-4 w-full rounded-md border border-red-200 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
                        >
                            Remove All
                        </button>
                    )}


        </aside>
    );
};

export default StackSidebar;