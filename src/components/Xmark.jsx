import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  font-weight: 600;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export default function Xmark({ setModalClick }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={() => {
        setModalClick(false);
      }}
    >
      <g filter="url(#filter0_d_79_1315)">
        <path
          d="M22.8986 0.934874C22.7372 0.77315 22.5455 0.644844 22.3344 0.557301C22.1234 0.469757 21.8971 0.424696 21.6687 0.424696C21.4402 0.424696 21.2139 0.469757 21.0029 0.557301C20.7919 0.644844 20.6002 0.77315 20.4388 0.934874L11.908 9.4482L3.37722 0.917429C3.21571 0.755916 3.02397 0.627798 2.81294 0.540388C2.60191 0.452978 2.37574 0.40799 2.14733 0.40799C1.91891 0.40799 1.69274 0.452978 1.48171 0.540388C1.27068 0.627798 1.07894 0.755916 0.917429 0.917429C0.755916 1.07894 0.627798 1.27068 0.540388 1.48171C0.452978 1.69274 0.40799 1.91891 0.40799 2.14733C0.40799 2.37574 0.452978 2.60191 0.540388 2.81294C0.627798 3.02397 0.755916 3.21571 0.917429 3.37722L9.4482 11.908L0.917429 20.4388C0.755916 20.6003 0.627798 20.792 0.540388 21.003C0.452978 21.2141 0.40799 21.4402 0.40799 21.6687C0.40799 21.8971 0.452978 22.1232 0.540388 22.3343C0.627798 22.5453 0.755916 22.737 0.917429 22.8986C1.07894 23.0601 1.27068 23.1882 1.48171 23.2756C1.69274 23.363 1.91891 23.408 2.14733 23.408C2.37574 23.408 2.60191 23.363 2.81294 23.2756C3.02397 23.1882 3.21571 23.0601 3.37722 22.8986L11.908 14.3678L20.4388 22.8986C20.6003 23.0601 20.792 23.1882 21.003 23.2756C21.2141 23.363 21.4402 23.408 21.6687 23.408C21.8971 23.408 22.1232 23.363 22.3343 23.2756C22.5453 23.1882 22.737 23.0601 22.8986 22.8986C23.0601 22.737 23.1882 22.5453 23.2756 22.3343C23.363 22.1232 23.408 21.8971 23.408 21.6687C23.408 21.4402 23.363 21.2141 23.2756 21.003C23.1882 20.792 23.0601 20.6003 22.8986 20.4388L14.3678 11.908L22.8986 3.37722C23.5615 2.7143 23.5615 1.5978 22.8986 0.934874Z"
          fill="#F8F8F8"
        />
      </g>
    </Svg>
  );
}
