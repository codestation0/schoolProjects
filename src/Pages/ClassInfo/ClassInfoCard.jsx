const ClassInfoCard = ({ row }) => {
  const { class: classes, male, female } = row;
  const total = parseFloat(male) + parseFloat(female);
  return (
    <tr key={row.class} className="">
      <td className="px-6 py-4 whitespace-no-wrap">{classes}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{male}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{female}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{total}</td>
    </tr>
  );
};

export default ClassInfoCard;
