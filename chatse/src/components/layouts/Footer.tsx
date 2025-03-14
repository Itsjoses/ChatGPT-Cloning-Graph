import DynamicLayout from "./DynamicLayout";

export default function Footer() {
  return (
    <div>
      <DynamicLayout border={false}>
        <div className="text-gray-400 text-center w-full py-1 text-xs">
          Created By Jose Susanto
        </div>
      </DynamicLayout>
    </div>
  );
}
