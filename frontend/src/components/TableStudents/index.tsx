import "./style.css";

function TableStudents() {
	return (
			<div className="container-alunos">
				<div className="container-controller">
					<button type="button">Adicionar</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Nome</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Bruno</td>
							</tr>
							<tr>
								<td>Ana</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
	);
}

export default TableStudents;
