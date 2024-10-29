import { defaultIconType } from "@/app/types/icons";

type LaptopIconProps = defaultIconType;

const LaptopIcon = ({
    width = "46",
    height = "46",
    fill = "#45251A",
    className,
}: LaptopIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4145 36.75C40.9031 36.7505 41.3729 36.9376 41.7282 37.273C42.0834 37.6083 42.2972 38.0667 42.3258 38.5543C42.3544 39.042 42.1958 39.5222 41.8822 39.8968C41.5687 40.2715 41.1239 40.5122 40.6388 40.5699L40.4145 40.5833H5.91454C5.42602 40.5828 4.95615 40.3957 4.60092 40.0604C4.24569 39.725 4.03193 39.2667 4.0033 38.779C3.97467 38.2913 4.13334 37.8111 4.44688 37.4365C4.76043 37.0619 5.20519 36.8211 5.69029 36.7634L5.91454 36.75H40.4145ZM36.5812 8C37.5483 7.99969 38.4798 8.36495 39.1889 9.02254C39.8981 9.68013 40.3324 10.5815 40.405 11.5458L40.4145 11.8333V31C40.4149 31.9671 40.0496 32.8986 39.392 33.6077C38.7344 34.3169 37.8331 34.7512 36.8687 34.8238L36.5812 34.8333H9.74788C8.78077 34.8336 7.84929 34.4684 7.14016 33.8108C6.43103 33.1532 5.99666 32.2519 5.92413 31.2875L5.91454 31V11.8333C5.91424 10.8662 6.27949 9.93475 6.93708 9.22562C7.59467 8.51649 8.496 8.08212 9.46038 8.00958L9.74788 8H36.5812ZM36.5812 11.8333H9.74788V31H36.5812V11.8333Z"
                fill={fill}
            />
        </svg>
    );
};

export default LaptopIcon;
