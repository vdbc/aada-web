import Footer from "../../components/Footer";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import SlideGuidebook from "../../components/SlideGuidebook";
import SlideVideo from "../../components/SlideVideo";
import { GalleryTopBanner } from "../../components/TopBanner";
import { useAppSelector, wrapper } from "../../store";
import {
  getAllGallery,
  selectGalleryDetail,
} from "../../store/modules/gallery";
import { getAllGuidebook } from "../../store/modules/guidebook";
import { getAllVideo } from "../../store/modules/video";
import MenuAlbum from "./MenuAlbum";

import styles from "./styles.module.scss";

export default function _View({ id }: { id: number }) {
  const galleries = useAppSelector(selectGalleryDetail(id));
  return (
    <div className={styles.container}>
      <Header />
      <GalleryTopBanner />
      <h2>GALLERY</h2>
      <MenuAlbum />
      <h2>Video</h2>
      <SlideVideo />
      <h2>PDF ASSETS</h2>
      <SlideGuidebook />
      <AdvisorsFooterBanner />
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(getAllGallery()),
      store.dispatch(getAllVideo()),
      store.dispatch(getAllGuidebook()),
    ]);
    return {
      props: {},
    };
  }
);
