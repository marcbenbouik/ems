import Thumbnail from "../thumbnail/Thumbnail";
import "../gallery/gallery.scss";

function Gallery({ liste }) {

    return (
        <div className="gallery_container">
            <section className="gallerySection">
                {liste.map((element, index) => {
                    return (
                        <Thumbnail
                            key={element.title + element.id}
                            title={element.title}
                            path={element.path}
                            id={element.id}
                            index={index}
                        />
                    );
                })}
            </section>
        </div>
    );
}

export default Gallery;
