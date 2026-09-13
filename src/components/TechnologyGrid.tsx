import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

const TechnologyGrid = () => {
    return (
        <section
            id="technologies"
            className="bg-white px-4 py-8 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">


                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">


                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}
                    </div>


                    <StackSidebar />

                </div>

            </div>
        </section>
    );
};

export default TechnologyGrid;