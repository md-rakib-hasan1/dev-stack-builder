import { useState } from "react";
import technologies from "../data/technologies.json";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import { toast } from "react-toastify";

const TechnologyGrid = () => {
    const [stack, setStack] = useState<Technology[]>([]);

    const handleAddToStack = (technology: Technology) => {
        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setStack([...stack, technology]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id: string) => {
        const removedTechnology = stack.find(
            (item) => item.id === id
        );

        setStack(stack.filter((item) => item.id !== id));

        if (removedTechnology) {
            toast.success(`${removedTechnology.name} removed from your stack!`);
        }
    };

    const handleRemoveAll = () => {
        setStack([]);

        toast.success("All technologies removed from your stack!");
    };

    return (
        <section
            id="technologies"
            className="bg-white px-4 py-8 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
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

                {/* Technologies and Stack */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">

                    {/* Technology Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                onAdd={handleAddToStack}
                                isAdded={stack.some((item) => item.id === technology.id)}
                            />
                        ))}
                    </div>

                    {/* Your Stack Sidebar */}
                    <StackSidebar
                        stack={stack}
                        onRemove={handleRemoveFromStack}
                        onRemoveAll={handleRemoveAll}
                    />

                </div>

            </div>
        </section>
    );
};

export default TechnologyGrid;