import { defaultIconType } from "@/app/types/icons";

type MarkIconProps = defaultIconType & {
    strokeFill?: string;
};

const MarkIcon = ({
    width = "54",
    height = "54",
    fill = "#0DFF0D",
    strokeFill = "#333333",
    className,
}: MarkIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                opacity="0.2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.28584 21.4012C4.95054 19.7396 6.23084 16.559 6.18434 14.2092C6.16099 13.0997 6.36266 11.9971 6.77718 10.9677C7.19169 9.93835 7.81046 9.00364 8.59614 8.21999C9.41006 7.40397 10.3866 6.76835 11.4622 6.35443C12.5379 5.94052 13.6886 5.75757 14.8395 5.81748C17.0529 5.92908 19.8491 4.85649 21.4115 3.28789C22.9577 1.74317 25.0539 0.875488 27.2395 0.875488C29.4251 0.875488 31.5213 1.74317 33.0675 3.28789C34.633 4.85339 37.4261 5.92908 39.6395 5.81748C40.791 5.75713 41.9423 5.93986 43.0185 6.35379C44.0948 6.76772 45.0718 7.40357 45.886 8.21999C46.6715 9.00426 47.29 9.93959 47.7039 10.9695C48.1179 11.9994 48.3189 13.1025 48.2947 14.2123C48.2482 16.559 49.5347 19.7427 51.1932 21.4043C52.738 22.9548 53.6037 25.0552 53.6002 27.2439C53.5968 29.4325 52.7243 31.5302 51.1746 33.0758C49.5378 34.7126 48.3412 37.5336 48.2978 39.8462C48.2576 41.9742 47.3929 44.0036 45.886 45.5068C44.4417 46.9541 42.5096 47.8107 40.4672 47.9093C38.0151 48.0333 34.8035 49.4593 33.0675 51.1953C31.5213 52.74 29.4251 53.6077 27.2395 53.6077C25.0539 53.6077 22.9577 52.74 21.4115 51.1953C19.6755 49.4593 16.467 48.0333 14.0149 47.9093C11.9726 47.8107 10.0405 46.9541 8.59614 45.5068C7.09073 44.0051 6.22621 41.9783 6.18434 39.8524C6.13784 37.5336 4.92574 34.694 3.28584 33.0541C1.74208 31.508 0.874992 29.4125 0.874992 27.2276C0.874992 25.0428 1.74208 22.9473 3.28584 21.4012Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0138 9.63859C9.52349 10.1271 9.13743 10.7101 8.879 11.3522C8.62056 11.9943 8.49513 12.6821 8.5103 13.3741C8.5413 15.0791 8.1073 16.8833 7.478 18.4457C6.8487 20.0112 5.9094 21.6139 4.7066 22.8198C3.744 23.7845 3.20339 25.0917 3.20339 26.4545C3.20339 27.8174 3.744 29.1246 4.7066 30.0893C6.9076 32.2934 8.4452 35.8956 8.5103 39.0142C8.53478 40.3149 9.05279 41.5577 9.95937 42.4908C10.866 43.4238 12.0933 43.9774 13.3928 44.0393C15.0978 44.123 16.8927 44.6407 18.4675 45.3413C20.0392 46.0388 21.6264 47.0215 22.8323 48.2274C23.797 49.19 25.1042 49.7306 26.467 49.7306C27.8299 49.7306 29.1371 49.19 30.1018 48.2274C31.3077 47.0215 32.8918 46.0388 34.4666 45.3382C36.0414 44.6407 37.8363 44.123 39.5413 44.0393C40.8421 43.978 42.0708 43.4238 42.9776 42.4893C43.8845 41.5548 44.4016 40.31 44.4238 39.008C44.4858 35.9018 46.0017 32.3151 48.2058 30.111C48.686 29.6337 49.0675 29.0665 49.3285 28.4417C49.5895 27.817 49.7248 27.1469 49.7269 26.4699C49.7289 25.7928 49.5975 25.122 49.3402 24.4957C49.083 23.8694 48.7049 23.2999 48.2275 22.8198C47.0247 21.617 46.0885 20.0143 45.4561 18.4488C44.8237 16.8833 44.3897 15.0791 44.4238 13.3741C44.4386 12.6819 44.3126 11.9939 44.0537 11.3518C43.7947 10.7097 43.4081 10.1269 42.9172 9.63859C42.4101 9.12889 41.8012 8.73183 41.1304 8.4733C40.4595 8.21477 39.7416 8.10058 39.0236 8.13819C35.936 8.29319 32.2873 6.89199 30.1018 4.70649C29.1371 3.74388 27.8299 3.20328 26.467 3.20328C25.1042 3.20328 23.797 3.74388 22.8323 4.70649C20.6468 6.89199 16.9981 8.29319 13.9105 8.13819C13.192 8.10014 12.4735 8.21411 11.8021 8.47265C11.1306 8.7312 10.5213 9.12849 10.0138 9.63859ZM5.4103 13.4299C5.4568 15.7797 4.1765 18.9634 2.5118 20.625C0.968036 22.1711 0.100952 24.2666 0.100952 26.4514C0.100952 28.6363 0.968036 30.7318 2.5118 32.2779C4.1548 33.9178 5.3638 36.7574 5.4103 39.0731C5.4537 41.1253 6.2566 43.1651 7.8221 44.7306C9.26644 46.1779 11.1986 47.0345 13.2409 47.1331C15.693 47.2571 18.9046 48.68 20.6406 50.4191C22.1867 51.9629 24.2822 52.8299 26.467 52.8299C28.6519 52.8299 30.7474 51.9629 32.2935 50.4191C34.0295 48.68 37.2411 47.2571 39.6932 47.1331C41.7355 47.0345 43.6677 46.1779 45.112 44.7306C46.6177 43.2269 47.4813 41.1976 47.5207 39.07C47.5672 36.7543 48.7607 33.9364 50.4006 32.2996C51.9512 30.7539 52.8243 28.6555 52.8277 26.4661C52.8312 24.2767 51.9649 22.1756 50.4192 20.625C48.7576 18.9634 47.4742 15.7828 47.5238 13.433C47.5476 12.323 47.3461 11.2198 46.9316 10.1898C46.517 9.15992 45.8981 8.22471 45.112 7.44069C44.2977 6.62427 43.3207 5.98842 42.2445 5.57449C41.1683 5.16057 40.017 4.97783 38.8655 5.03819C36.6521 5.14979 33.859 4.07719 32.2935 2.50859C30.7473 0.963876 28.6511 0.0961914 26.4655 0.0961914C24.2799 0.0961914 22.1837 0.963876 20.6375 2.50859C19.0751 4.07719 16.2789 5.14979 14.0655 5.03819C12.9145 4.97828 11.7638 5.16122 10.6882 5.57514C9.61253 5.98905 8.63601 6.62467 7.8221 7.44069C7.03642 8.22434 6.41765 9.15905 6.00314 10.1884C5.58862 11.2178 5.38695 12.3204 5.4103 13.4299Z"
                fill={strokeFill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.1238 17.3482C35.3017 17.4471 35.4584 17.5801 35.5849 17.7396C35.7114 17.8991 35.8053 18.0819 35.8611 18.2776C35.917 18.4734 35.9337 18.6782 35.9104 18.8804C35.8871 19.0827 35.8241 19.2783 35.7252 19.4562L27.1165 34.9562C27.0176 35.1341 26.8846 35.2908 26.7251 35.4173C26.5656 35.5438 26.3828 35.6376 26.1871 35.6935C25.9913 35.7493 25.7865 35.7661 25.5843 35.7428C25.382 35.7194 25.1864 35.6565 25.0085 35.5576C24.8306 35.4587 24.6739 35.3257 24.5474 35.1662C24.4209 35.0067 24.3271 34.8239 24.2712 34.6282C24.2154 34.4324 24.1986 34.2276 24.2219 34.0254C24.2453 33.8232 24.3082 33.6275 24.4071 33.4496L33.0158 17.9496C33.1147 17.7717 33.2477 17.615 33.4072 17.4885C33.5667 17.362 33.7495 17.2681 33.9452 17.2123C34.141 17.1565 34.3458 17.1397 34.548 17.163C34.7503 17.1864 34.9459 17.2493 35.1238 17.3482Z"
                fill={strokeFill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.941 26.3445C16.1978 26.0243 16.5711 25.819 16.9791 25.7736C17.3871 25.7283 17.7964 25.8467 18.1172 26.1027L26.729 32.9909C27.0501 33.2479 27.2559 33.6218 27.3013 34.0305C27.3466 34.4392 27.2277 34.8492 26.9708 35.1702C26.7139 35.4913 26.3399 35.6971 25.9312 35.7425C25.5225 35.7878 25.1126 35.669 24.7915 35.412L16.1828 28.5269C16.0238 28.3998 15.8914 28.2425 15.7932 28.0641C15.6949 27.8858 15.6328 27.6898 15.6104 27.4874C15.5879 27.285 15.6056 27.0802 15.6623 26.8846C15.719 26.6891 15.8137 26.5066 15.941 26.3476"
                fill={strokeFill}
            />
        </svg>
    );
};

export default MarkIcon;
