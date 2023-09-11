// import * as React from "react";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import SwiperCore, {
//   Keyboard,
//   Mousewheel,
//   Navigation,
//   Pagination,
// } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import styles from "./styles.module.scss";
// import Swiper, { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import { SwiperSlide } from "swiper/react";
// import { getProjectImages } from "../../utils/project-nominate";

// SwiperCore.use([Navigation, Pagination]);
// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   height: 500,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,

//   p: 4,
// };

// declare type Props = {
//   isOpen: boolean;
//   onSetIsOpen: any;
// };
// export default function ModalSuccess({ isOpen, onSetIsOpen }: Props) {
//   const handleOpen = () => onSetIsOpen(true);
//   const handleClose = () => onSetIsOpen(false);

//   return (
//     <div>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={isOpen}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//       >
//         <Fade in={isOpen}>
//           <Box sx={style} className={styles.modal}>
//             <div className={styles.container}>
//               <Swiper
//                 cssMode={true}
//                 navigation={true}
//                 pagination={true}
//                 mousewheel={true}
//                 keyboard={true}
//                 modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//                 className={styles.mySwiper}
//               >
//                 {getProjectImages(project).map((imageUrl, index) => (
//                   <SwiperSlide key={index}>
//                     <img
//                       src={getImageUrl(imageUrl)}
//                       alt={`Project image ${index}`}
//                       className={styles.swiperImg}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
