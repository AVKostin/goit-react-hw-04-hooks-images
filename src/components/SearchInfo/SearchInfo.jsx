import { useState, useEffect } from "react";
import Modal from "../Modal";
import Button from "../Button";
import { Notify } from "notiflix";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import { fetchPictures } from "../../Services/PixabayApi";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const Status = {
    idle: "idle",
    pending: "pending",
    resolved: "resolved",
    rejected: "rejected",
};

export default function SearchInfo() {
    const [page, setPage] = useState(1);
    const [tags, setTags] = useState("");
    const [query, setQuery] = useState("");
    const [pictures, setPictures] = useState([]);
    const [largeImage, setLargeImage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState(Status.idle);

    useEffect(() => {
      if (query) {
        setStatus(Status.pending);
        fetchPictures(query, page)
          .then((pictures) => {
            if (
                pictures.hits.length === 0 &&
                pictures.totalHits !== 0
            ) {
                Notify.info(
                  "We're sorry, but you've reached the end of search results.",
                );
            }
            if (
                page === 1 &&
                pictures.totalHits !== 0 &&
                pictures.hits.length !== 0
            ) {
                Notify.success(
                  `Hooray! We found ${pictures.totalHits} images.`,
                );
            } else if (
                pictures.totalHits === 0 &&
                pictures.hits.length === 0
            ) {
                Notify.failure(
                  "Sorry, there are no images matching your search query. Please try again.",
                );
            }
        setPictures((state) => [...state, ...pictures.hits]);
        setStatus(Status.resolved);
          })
          .catch(() => {
                Notify.info(
                  "We're sorry, but you've reached the end of search results.",
            );
          });
      }
    }, [query, page]);

    const incrementPage = () => {
        setPage((state) => state + 1);
    };

    const handleFormSubmit = (query) => {
        setPage(1);
        setPictures([]);
        setQuery(query);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const setInfoForModal = (url, tags) => {
        setLargeImage(url);
        setTags(tags);
        toggleModal();
    };

    if (status === Status.idle) {
        return <Searchbar onSubmit={handleFormSubmit} />;
    }

  if (status === Status.pending) {
    return (
      <>
        {Loading.pulse({
            svgSize: "120px",
        })}
        <Searchbar onSubmit={handleFormSubmit} />;
        <main>
          <ImageGallery
              pictures={pictures}
              setInfoForModal={setInfoForModal}
          />
          {pictures.length !== 0 && (
              <Button incrementPage={incrementPage} />
          )}
        </main>
      </>
    );
  }

  if (status === Status.resolved) {
    return (
      <>
        {Loading.remove()}
        <Searchbar onSubmit={handleFormSubmit} />;
        <main>
            <ImageGallery
                pictures={pictures}
                setInfoForModal={setInfoForModal}
            />
            {showModal && (
              <Modal
                onClose={toggleModal}
                largeImage={largeImage}
                tags={tags}
              />
            )}
            {pictures.length !== 0 && (
                <Button incrementPage={incrementPage} />
            )}
        </main>
      </>
    );
  }
}
