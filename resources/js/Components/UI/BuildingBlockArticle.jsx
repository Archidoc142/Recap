export default function BuildingBlockArticle({ content }) {

    const renderBlock = () => {
        switch (content.type) {

            case "title":
                const levelClass = content?.level == 2 ? "text-3xl font-bold" : 
                                   content?.level == 3 ? "text-2xl font-semibold" : 
                                   content?.level == 4 ? "text-xl font-medium" : "text-xl";
                return (
                    <h3 className={"mb-2 " + levelClass}>{content.text}</h3>
                );

            case "text":
                return (
                    <p className="mb-4 text-justify">{content.text}</p>
                );
            
            case "list":
                return (
                    <ul className="list-disc pl-5 mb-4">
                        {content.items.map((item, index) => (
                            <li key={index} className="mb-2">{item.text}</li>
                        ))}
                    </ul>
                )
            case "image":
                const widthStyle = content.width && !isNaN(content.width) ? { width: `${content.width}%` } : {};

                return (
                    <div className="mb-8">
                        <img 
                            src={content.link} 
                            alt={content?.legend || "Image"} 
                            style={widthStyle}
                            className="mx-auto"
                            loading="lazy"
                        />
                        {content.legend && <p className="py-1 px-4 overflow-hidden text-ellipsis whitespace-normal mx-auto bg-[#1c1c1c]" style={widthStyle}>{content.legend}</p>}
                    </div>
                );

            case "video":
                return (
                    <div className="video-container mx-auto mb-8">
                        <div dangerouslySetInnerHTML={{ __html: content.embed }} />
                    </div>
                );
            case "spacer":
                return (
                    <div className={content.spacing ? content.spacing : "my-4"} />
                );
            case "hr":
                return (
                    <hr className="my-4 border border-gray-500" />
                );

            default:
                return null;
        }
    }

    return (<>{renderBlock()}</>)
}
