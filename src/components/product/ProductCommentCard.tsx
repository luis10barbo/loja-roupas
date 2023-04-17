const ProductCommentCard: React.FC = () => {
  return (
    <div className="flex gap-4 rounded-xl bg-white p-4">
      <div className="h-16 w-16 rounded-full border bg-gray-200" />
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-2xl">NOME CRIADOR COMENTARIO</p>

        <p className=" text-lg">Um comentário sensivel aqui</p>
        <p className="text-gray-600">
          Data de criação: {new Date().toString()}
        </p>
      </div>
    </div>
  );
};
export default ProductCommentCard;
