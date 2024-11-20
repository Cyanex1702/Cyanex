import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import '../app/styles.css';
const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={i}
                        title={<h3 className="text-capitalize">{item.title}</h3>} // Capitalize the title
                        description={<p className={`${item.descriptionColorClass}`}>{item.description}</p>} // Capitalize the description
                        //title={item.title}
                        //description={item.description}


                        // remove icon prop
                        // remove original classname condition
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;