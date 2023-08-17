import styles from "../style/index.module.scss";

function Header() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      className={styles.head}
    >
      <defs>
        <path id="a" d="M0 0h1440v156H0z" />
      </defs>
      <g fill="#2f4f4f" fillRule="evenodd">
        <mask id="b" fill="#BDB76B">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" />
        <g mask="url(#b)" fill="#63BABA">
          <path d="M 695.742188 790.953125 C 623.550781 722.453125 620.542969 608.382812 689.023438 536.171875 C 691.203125 533.871094 693.445312 531.628906 695.746094 529.449219 L 1282.621094 -27.402344 C 1359.875 -100.703125 1480.972656 -100.703125 1558.226562 -27.402344 C 1628.988281 39.738281 1633.28125 150.65625 1568.941406 223.03125 L 1832.878906 -27.402344 C 1910.132812 -100.703125 2031.226562 -100.703125 2108.480469 -27.402344 C 2180.675781 41.097656 2183.683594 155.167969 2115.203125 227.378906 C 2113.023438 229.679688 2110.78125 231.921875 2108.480469 234.101562 L 1521.609375 790.949219 C 1444.355469 864.25 1323.257812 864.25 1246.003906 790.949219 C 1175.242188 723.808594 1170.949219 612.890625 1235.289062 540.515625 L 971.347656 790.953125 C 894.09375 864.257812 773 864.257812 695.746094 790.953125 Z M 505.902344 63.90625 C 433.707031 -4.59375 430.699219 -118.664062 499.179688 -190.875 C 501.359375 -193.175781 503.601562 -195.417969 505.902344 -197.597656 L 1092.78125 -754.453125 C 1170.035156 -827.753906 1291.132812 -827.753906 1368.386719 -754.453125 C 1440.582031 -685.953125 1443.589844 -571.882812 1375.109375 -499.671875 C 1372.925781 -497.371094 1370.6875 -495.128906 1368.386719 -492.945312 L 781.503906 63.90625 C 704.25 137.207031 583.15625 137.207031 505.902344 63.90625 Z M -152.039062 164.75 C -224.234375 96.246094 -227.242188 -17.820312 -158.761719 -90.035156 C -156.578125 -92.332031 -154.335938 -94.574219 -152.039062 -96.757812 L 434.835938 -653.605469 C 512.09375 -726.910156 633.1875 -726.910156 710.441406 -653.605469 C 782.636719 -585.109375 785.644531 -471.035156 717.164062 -398.824219 C 714.984375 -396.527344 712.742188 -394.285156 710.441406 -392.101562 L 123.566406 164.746094 C 46.3125 238.050781 -74.785156 238.050781 -152.039062 164.746094 Z M -152.039062 164.75 " />
        </g>
      </g>
    </svg>
  );
}
export default Header;
