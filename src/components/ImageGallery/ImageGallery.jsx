import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import { ImageList } from "./ImageGallery.styled";

export default function ImageGallery({ pictures, setInfoForModal }) {
    return (
        <ImageList>
            {pictures.map(
                ({
                    id,
                    webformatURL,
                    largeImageURL,
                    tags,
                    likes,
                    views,
                    comments,
                    downloads,
                }) => (
                    <ImageGalleryItem
                        setInfoForModal={setInfoForModal}
                        key={id}
                        id={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                        likes={likes}
                        views={views}
                        comments={comments}
                        downloads={downloads}
                    />
                ),
            )}
        </ImageList>
    );
}

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            comments: PropTypes.number.isRequired,
            downloads: PropTypes.number.isRequired,
        }),
    ).isRequired,
    setInfoForModal: PropTypes.func.isRequired,
};
