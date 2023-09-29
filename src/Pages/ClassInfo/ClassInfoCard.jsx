const ClassInfoCard = ({ row }) => {
  const { class: classes, male, female } = row;
  const total = parseFloat(male) + parseFloat(female);
  return (
    <tr
      key={row.class}
      className="bg-zinc-200 odd:bg-zinc-300 sm:text-xl text-center"
    >
      <td className="px-6 py-4 whitespace-no-wrap">{classes}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{male}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{female}</td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">{total}</td>
    </tr>
  );
};

export default ClassInfoCard;
