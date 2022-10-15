import PropTypes from "prop-types";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import {
    Info,
    Image,
    Comments,
    ImageItem,
    InfoWrapper,
    ImageWrapper,
} from "./ImageGalleryItem.styled";

import {
    TiMessages,
    TiThumbsUp,
    TiDownload,
    TiEyeOutline,
} from "react-icons/ti";

export default function ImageGalleryItem({
    setInfoForModal,
    id,
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
}) {
    const handleClick = () => {
        Loading.arrows({ svgSize: "120px" });
        setInfoForModal(largeImageURL, tags);
        Loading.remove();
    };
    return (
        <ImageItem key={id} onClick={handleClick}>
            <div>
                <ImageWrapper>
                    <Image src={webformatURL} alt={tags} loading="lazy" />
                </ImageWrapper>
                <InfoWrapper>
                    <Info>
                        <b>
                            <TiEyeOutline size={26} color="#000000" />
                        </b>
                        <Comments>{views}</Comments>
                    </Info>
                    <Info>
                        <b>
                            <TiThumbsUp size={26} color="#000000" />
                        </b>
                        <Comments> {likes}</Comments>
                    </Info>
                    <Info>
                        <b>
                            <TiDownload size={26} color="#000000" />
                        </b>
                        <Comments>{downloads}</Comments>
                    </Info>
                    <Info>
                        <b>
                            <TiMessages size={26} color="#000000" />
                        </b>
                        <Comments>{comments}</Comments>
                    </Info>
                </InfoWrapper>
            </div>
        </ImageItem>
    );
}

ImageGalleryItem.propTypes = {
    setInfoForModal: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
};
