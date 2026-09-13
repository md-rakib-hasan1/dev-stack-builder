import { useState, useEffect } from "react";
import technologies from "../data/technologies.json";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import { toast } from "react-toastify";

const TechnologyGrid = () => {
    const [stack, setStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

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


                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Explore the{" "}
                        <span className="gradient-text">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px] lg:gap-6">


                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {loading ? (
                            <div className="col-span-full flex min-h-60 items-center justify-center">
                                <div className="text-center">
                                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

                                    <p className="mt-4 text-sm text-slate-500">
                                        Loading technologies...
                                    </p>
                                </div>
                            </div>
                        ) : (
                            technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    onAdd={handleAddToStack}
                                    isAdded={stack.some(
                                        (item) => item.id === technology.id
                                    )}
                                />
                            ))
                        )}
                    </div>


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