import { defaultIconType } from "@/app/types/icons";

type LungsIconProps = defaultIconType;

const LungsIcon = ({
    width = "57",
    height = "57",
    fill = "#45251A",
    className,
}: LungsIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M20.1875 13.0625C23.541 14.1788 25.0515 18.1901 25.7141 22.6171L14.972 28.8182L17.347 32.9318L26.1583 27.8469C26.2675 31.0626 26.125 33.9839 26.125 35.625C26.125 42.75 23.75 49.875 14.25 49.875C4.75 49.875 4.75 49.875 4.75 40.375C4.75 22.5625 13.0625 10.6875 20.1875 13.0625ZM52.2524 40.375V41.4105C52.2405 49.875 51.8961 49.875 42.7524 49.875C33.2524 49.875 30.8774 42.75 30.8774 35.625C30.8774 33.9839 30.7349 31.065 30.8441 27.8492L39.6554 32.9318L42.0304 28.8182L31.2883 22.6195C31.9509 18.1901 33.4614 14.1811 36.8149 13.0625C43.9399 10.6875 52.2524 22.5625 52.2524 40.375ZM30.875 4.75V26.125H26.125V4.75H30.875Z"
                fill={fill}
            />
        </svg>
    );
};

export default LungsIcon;
