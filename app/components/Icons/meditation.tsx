import { defaultIconType } from "@/app/types/icons";

type MeditationIconProps = defaultIconType;

const MeditationIcon = ({
    width = "57",
    height = "57",
    fill = "#45251A",
    className,
}: MeditationIconProps) => {
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
                d="M28.5 9.5C31.1362 9.5 33.25 11.6138 33.25 14.25C33.25 16.8863 31.1362 19 28.5 19C25.8638 19 23.75 16.8863 23.75 14.25C23.75 11.6138 25.8875 9.5 28.5 9.5ZM49.875 38V33.25C44.555 33.25 39.995 30.97 36.575 26.885L33.3925 23.085C32.9506 22.5494 32.3956 22.1182 31.7673 21.8226C31.1391 21.5269 30.4531 21.3741 29.7587 21.375H27.3125C25.8638 21.375 24.5337 21.9925 23.6313 23.085L20.4487 26.885C17.005 30.97 12.445 33.25 7.125 33.25V38C13.7038 38 19.4513 35.2213 23.75 30.2813V35.625L14.535 39.3063C12.9437 39.9475 11.875 41.5625 11.875 43.2488C11.875 45.6 13.775 47.5 16.1263 47.5H21.375V46.3125C21.375 44.7378 22.0006 43.2276 23.1141 42.1141C24.2276 41.0006 25.7378 40.375 27.3125 40.375H34.4375C35.1025 40.375 35.625 40.8975 35.625 41.5625C35.625 42.2275 35.1025 42.75 34.4375 42.75H27.3125C25.3412 42.75 23.75 44.3413 23.75 46.3125V47.5H40.8737C43.225 47.5 45.125 45.6 45.125 43.2488C45.125 41.5625 44.0562 39.9475 42.465 39.3063L33.25 35.625V30.2813C37.5487 35.2213 43.2962 38 49.875 38Z"
                fill={fill}
            />
        </svg>
    );
};

export default MeditationIcon;
