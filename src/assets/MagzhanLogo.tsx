import styles from "../scss/components/header.module.scss";

export const MagzhanLogo = () => {
  return (
    <svg
      className={styles.magzhan}
      width="140"
      height="33"
      viewBox="0 0 140 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4965 24.328V9.8L10.4165 13.672H7.1845L5.2325 9.864V24.296C5.2325 24.68 5.22183 24.936 5.2005 25.064C5.11517 25.3627 4.69917 25.512 3.9525 25.512C1.81917 25.512 0.7525 25.1173 0.7525 24.328V1.64C0.7525 0.829333 1.4885 0.424 2.9605 0.424C4.4325 0.424 5.31783 0.818666 5.6165 1.608L8.8485 9.864L12.2405 1.576C12.4112 1.10667 12.6138 0.797333 12.8485 0.647999C13.1045 0.498666 13.5418 0.424 14.1605 0.424C15.6965 0.424 16.4752 0.84 16.4965 1.672L17.0085 11.208V24.104C17.0085 24.744 16.9445 25.1387 16.8165 25.288C16.7098 25.4373 16.3258 25.512 15.6645 25.512C15.0245 25.512 14.5018 25.4907 14.0965 25.448C13.6912 25.4053 13.3178 25.288 12.9765 25.096C12.6565 24.9253 12.4965 24.6693 12.4965 24.328ZM27.1743 24.008C26.0649 25.0107 25.0729 25.512 24.1983 25.512C23.3449 25.512 22.6516 25.448 22.1183 25.32C21.5849 25.2133 21.1049 24.968 20.6783 24.584C20.2516 24.1787 19.9529 23.6027 19.7823 22.856C19.6116 22.1093 19.5263 21.1173 19.5263 19.88C19.5263 18.152 20.3689 16.968 22.0543 16.328L26.6302 15.144C26.6089 13.7573 26.4703 12.8613 26.2143 12.456C25.9583 12.0507 25.4036 11.848 24.5503 11.848C23.6969 11.848 22.9609 11.9867 22.3423 12.264L21.2223 12.712H21.1903C20.9983 12.8187 20.8276 12.7333 20.6783 12.456C20.2943 11.6453 20.1023 11.016 20.1023 10.568C20.1023 10.0987 20.1343 9.84267 20.1983 9.8C20.2836 9.736 20.3263 9.69333 20.3263 9.672C21.3929 8.968 22.7689 8.616 24.4543 8.616C26.1609 8.616 27.4729 8.84 28.3903 9.288C29.3076 9.736 29.9689 10.5573 30.3743 11.752C30.8009 12.9253 31.0143 14.6747 31.0143 17L30.9503 25C30.9503 25.128 30.9289 25.2133 30.8863 25.256C30.8009 25.4267 30.3956 25.512 29.6703 25.512C28.3476 25.512 27.6863 25.3413 27.6863 25L27.1743 24.008ZM23.0783 19.944C23.0783 21.48 23.5263 22.2907 24.4223 22.376C25.0409 22.376 25.4889 22.2693 25.7663 22.056C26.3636 21.6507 26.6623 20.136 26.6623 17.512C25.5529 17.6613 24.6783 17.9707 24.0383 18.44C23.3983 18.888 23.0783 19.3893 23.0783 19.944ZM39.5968 26.536L36.8768 26.568C35.5541 26.568 34.7541 26.4613 34.4768 26.248C34.2208 26.0347 34.0928 25.7787 34.0928 25.48C34.0928 25.1813 34.1461 24.8507 34.2528 24.488L35.3728 21.096C34.3488 20.648 33.6128 19.912 33.1648 18.888C32.7168 17.864 32.4928 16.584 32.4928 15.048C32.4928 13.512 32.5888 12.3493 32.7808 11.56C32.9728 10.7707 33.3354 10.152 33.8688 9.704C34.4234 9.256 35.0741 8.968 35.8208 8.84C36.5674 8.69067 37.5914 8.616 38.8928 8.616H45.8688C46.2101 8.616 46.3808 9.04267 46.3808 9.896C46.3808 10.3227 46.2101 10.5787 45.8688 10.664L45.7728 10.696L44.3968 10.952C44.9941 11.9333 45.2928 13.2027 45.2928 14.76C45.2928 17.2133 44.8128 18.984 43.8528 20.072C42.9141 21.1387 41.2608 21.672 38.8928 21.672H38.1888L37.9008 23.176C40.3114 23.2187 41.8794 23.304 42.6048 23.432C43.3301 23.56 43.8314 23.7093 44.1088 23.88C44.3861 24.0507 44.6421 24.3067 44.8768 24.648C45.1328 24.9893 45.2821 25.384 45.3248 25.832C45.3888 26.28 45.4208 26.8667 45.4208 27.592C45.4208 29.3627 44.9301 30.6533 43.9488 31.464C42.9674 32.2747 41.2181 32.68 38.7008 32.68C37.5274 32.68 36.0554 32.5093 34.2848 32.168C33.9648 32.104 33.8048 31.56 33.8048 30.536C33.8048 29.512 33.9541 29 34.2528 29C34.2528 29 34.2634 29 34.2848 29H34.3168C36.2368 29.2133 37.7621 29.32 38.8928 29.32C40.0448 29.32 40.7594 29.2347 41.0368 29.064C41.3141 28.8933 41.4528 28.4667 41.4528 27.784C41.4528 27.1227 41.3248 26.7493 41.0688 26.664C40.8341 26.5787 40.3434 26.536 39.5968 26.536ZM39.6927 11.688C38.3061 11.688 37.4634 11.8373 37.1648 12.136C36.8874 12.4133 36.7488 13.2133 36.7488 14.536C36.7488 15.8373 36.8021 16.7867 36.9088 17.384C37.0368 17.96 37.1648 18.3013 37.2928 18.408C37.4208 18.4933 37.7301 18.536 38.2208 18.536C38.7328 18.536 39.1381 18.5253 39.4368 18.504C39.7568 18.4613 40.0448 18.3013 40.3008 18.024C40.5568 17.7467 40.6954 17.384 40.7168 16.936C40.7594 16.488 40.7808 15.784 40.7808 14.824C40.7808 13.864 40.7168 13.1493 40.5888 12.68C40.4821 12.1893 40.3648 11.9013 40.2368 11.816C40.1088 11.7307 39.9274 11.688 39.6927 11.688ZM48.6313 12.52C48.3113 12.52 48.1513 12.0187 48.1513 11.016C48.1513 10.952 48.1513 10.888 48.1513 10.824C48.1513 9.69333 48.3113 9.128 48.6313 9.128H58.1033L58.6153 9.64V12.52L53.0473 21.416H59.1273C59.4686 21.416 59.6393 21.8427 59.6393 22.696C59.6393 24.1893 59.4686 24.9573 59.1273 25H48.8873L48.3753 24.488V21.928L54.5833 12.52H48.6313ZM70.1328 8.616C71.7114 8.616 72.8634 9.10667 73.5888 10.088C74.3354 11.0693 74.7088 12.7973 74.7088 15.272V25C74.7088 25.128 74.6981 25.2133 74.6768 25.256C74.5701 25.4267 74.1541 25.512 73.4288 25.512C72.7248 25.512 71.9994 25.4587 71.2528 25.352C70.5061 25.2453 70.1328 25.128 70.1328 25L70.1008 15.272C70.1008 12.8827 69.9301 11.688 69.5888 11.688C68.8208 11.688 67.7968 12.072 66.5168 12.84V25C66.5168 25.128 66.5061 25.2133 66.4848 25.256C66.3781 25.4267 65.9621 25.512 65.2368 25.512C64.5328 25.512 63.7968 25.4587 63.0288 25.352C62.2821 25.2453 61.9088 25.128 61.9088 25V0.935999C61.9088 0.594666 62.2821 0.424 63.0288 0.424C63.7968 0.424 64.4581 0.477333 65.0128 0.584C65.5674 0.669332 65.8554 0.786665 65.8768 0.935999L66.4528 10.184C68.0741 9.13867 69.3008 8.616 70.1328 8.616ZM84.0805 24.008C82.9712 25.0107 81.9792 25.512 81.1045 25.512C80.2512 25.512 79.5578 25.448 79.0245 25.32C78.4912 25.2133 78.0112 24.968 77.5845 24.584C77.1578 24.1787 76.8592 23.6027 76.6885 22.856C76.5178 22.1093 76.4325 21.1173 76.4325 19.88C76.4325 18.152 77.2752 16.968 78.9605 16.328L83.5365 15.144C83.5152 13.7573 83.3765 12.8613 83.1205 12.456C82.8645 12.0507 82.3098 11.848 81.4565 11.848C80.6032 11.848 79.8672 11.9867 79.2485 12.264L78.1285 12.712H78.0965C77.9045 12.8187 77.7338 12.7333 77.5845 12.456C77.2005 11.6453 77.0085 11.016 77.0085 10.568C77.0085 10.0987 77.0405 9.84267 77.1045 9.8C77.1898 9.736 77.2325 9.69333 77.2325 9.672C78.2992 8.968 79.6752 8.616 81.3605 8.616C83.0672 8.616 84.3792 8.84 85.2965 9.288C86.2138 9.736 86.8752 10.5573 87.2805 11.752C87.7072 12.9253 87.9205 14.6747 87.9205 17L87.8565 25C87.8565 25.128 87.8352 25.2133 87.7925 25.256C87.7072 25.4267 87.3018 25.512 86.5765 25.512C85.2538 25.512 84.5925 25.3413 84.5925 25L84.0805 24.008ZM79.9845 19.944C79.9845 21.48 80.4325 22.2907 81.3285 22.376C81.9472 22.376 82.3952 22.2693 82.6725 22.056C83.2698 21.6507 83.5685 20.136 83.5685 17.512C82.4592 17.6613 81.5845 17.9707 80.9445 18.44C80.3045 18.888 79.9845 19.3893 79.9845 19.944ZM98.8828 8.616C100.461 8.616 101.613 9.10667 102.339 10.088C103.085 11.0693 103.459 12.7973 103.459 15.272V25C103.459 25.128 103.448 25.2133 103.427 25.256C103.32 25.4267 102.904 25.512 102.179 25.512C101.475 25.512 100.749 25.4587 100.003 25.352C99.2561 25.2453 98.8828 25.128 98.8828 25L98.8508 15.272C98.8508 12.8827 98.6801 11.688 98.3388 11.688C97.5708 11.688 96.5468 12.072 95.2668 12.84V25C95.2668 25.128 95.2561 25.2133 95.2348 25.256C95.1281 25.4267 94.7121 25.512 93.9868 25.512C93.2828 25.512 92.5468 25.4587 91.7788 25.352C91.0321 25.2453 90.6588 25.128 90.6588 25V9.128C90.6588 8.78667 91.0854 8.616 91.9388 8.616C93.2828 8.616 94.0508 8.78667 94.2428 9.128C94.2428 9.17067 94.2534 9.192 94.2748 9.192L94.8828 10.408C96.6748 9.21333 98.0081 8.616 98.8828 8.616ZM108.268 25.512C106.732 25.512 105.964 24.744 105.964 23.208C105.964 21.672 106.732 20.904 108.268 20.904C109.804 20.904 110.572 21.672 110.572 23.208C110.572 24.744 109.804 25.512 108.268 25.512ZM117.48 25C117.48 25.128 117.469 25.2133 117.448 25.256C117.341 25.4267 116.936 25.512 116.232 25.512C115.528 25.512 114.834 25.4587 114.152 25.352C113.469 25.2453 113.128 25.128 113.128 25V0.935999C113.128 0.594666 113.501 0.424 114.248 0.424C114.994 0.424 115.613 0.477333 116.104 0.584C116.594 0.669332 116.85 0.786665 116.872 0.935999L117.48 11.208V25ZM127.048 25.16C127.048 25.3947 126.653 25.512 125.864 25.512C125.074 25.512 124.306 25.4587 123.56 25.352C122.813 25.2453 122.408 25.128 122.344 25L122.312 24.968L118.152 16.296V15.272L121.544 9.16C121.565 9.16 121.576 9.14933 121.576 9.128C121.768 8.78667 122.194 8.616 122.856 8.616C124.37 8.616 125.341 8.744 125.768 9C125.853 9.04267 125.885 9.08533 125.864 9.128L122.248 15.272L127.016 25C127.037 25.064 127.048 25.1173 127.048 25.16ZM128.85 12.52C128.53 12.52 128.37 12.0187 128.37 11.016C128.37 10.952 128.37 10.888 128.37 10.824C128.37 9.69333 128.53 9.128 128.85 9.128H138.322L138.834 9.64V12.52L133.266 21.416H139.346C139.687 21.416 139.858 21.8427 139.858 22.696C139.858 24.1893 139.687 24.9573 139.346 25H129.106L128.594 24.488V21.928L134.802 12.52H128.85Z"
        fill="#172B4D"
      />
    </svg>
  );
};
