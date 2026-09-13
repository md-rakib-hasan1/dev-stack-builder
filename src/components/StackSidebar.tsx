const StackSidebar = () => {
    return (
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4">


            <div>
                <h2 className="text-base font-semibold text-slate-900">
                    Your Stack
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                    0 Technology Selected
                </p>
            </div>


            <div className="mt-5 flex min-h-24 items-center justify-center rounded-lg border border-dashed border-slate-200 px-4 text-center">
                <p className="text-xs text-slate-400">
                    Your stack is empty.
                </p>
            </div>

        </aside>
    );
};

export default StackSidebar;