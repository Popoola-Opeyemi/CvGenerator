const jsonlint = require("jsonlint")
var fs = require('fs');
var rmdir = require('rimraf');
var path = require('path')


const { v4: uuidv4 } = require('uuid');
module.exports = {

	// generate filename for pdf
	genfileName: ({ firstname, lastname }) => {
		let empty = false

		if (firstname == undefined || firstname == "") {
			empty = true
		}

		if (lastname == undefined || lastname == "") {
			empty = true
		}

		if (empty) {
			const uuid = uuidv4()
			return `${uuid}/${new Date().toLocaleDateString()}`
		}

		if (!empty) {
			return `${firstname}${lastname}/${new Date().toLocaleDateString()}`
		}

	},

	cleanUp: () => {
		// check if folder exist if it does continue else break off
		let dirExist = fs.existsSync("./server/public")
		try {
			if (dirExist) {
				rmdir(path.join(__dirname, "./public/"), (err) => {
					if (err) {
						throw err
					}
				});
			}
			if (!dirExist) {
				fs.mkdirSync("./server/public");
			}

			return { done: true }

		} catch (error) {
			return { done: false, error }

		}
	},

	cvHtml: (converter, jsonData) => {
		return `<body class="boxed">
	<center>
		<h1>${jsonData.firstname} ${jsonData.lastname}</h1>
		<h4 class="light m-m-t-10" style="color:grey; padding-top:5px">
			${Object.keys(jsonData.contact).map(function (key, index) {
			return ` 
			<span class="" >${jsonData.contact[key]}</span>`;
		}).join(' •')}
		</h4>
	</center>

	<hr class="thick">
	<h4 class="">TECHNICAL SKILLS</h4>
	<div class="offset-2">
		${jsonData.skills.details.map(function (key) {
			return `
		<p>
			<strong>${key.type}:</strong> ${key.items.map(function (key) { return `${key}` }).join(', ')}`
		}).join('</p>')}
		</div>
	<h4 class="">PERSONAL PROJECTS</h4>
	<div class="offset-2">


		${jsonData.github_projects.items.map(function (key) {
			return `
		<p>
			<strong class="title">${key['project_name']} ${converter.makeHtml(key['tagline']).replace(/<(\/)?p([^>]*)>/g, '')}
			</strong>
		</p>
		<div class="offset-2 p"> ${key['description'][0]} Technologies: ${key['technology_used'].tools.map(function (item) { return item }).join(', ')}
		</div> `}).join('')}


	</div>
	<h4 class="">OTHER PROJECTS</h4>

	${jsonData.other_projects.items.map(function (key) {
				return `<div class="offset-2">
	<p>
		<strong class="title">${key['headline']}</strong>
	</p>
	<div class="offset-2 p"> ${key['points'][0]} Technologies: ${key['technology_used'].tools.map(function (item) { return item }).join(', ')}
	</div></div>`}).join('')}
	<h4 class="">PROFESSIONAL EXPERIENCE</h4>
	<div class="offset-2">
		<p>
			<strong class="title">${jsonData.work_experience.items.map(function (key) {
					return `${key['title']}, ${key['organisation']}, ${key['location']}</b>
				<span class="pull-right">${key['from']} - ${key['to']}</span>
			</strong>
		</p>
		<div class="offset-2 p">${key['details'][0]} Technologies: ${key['technology_used'].tools.map(function (item) { return item }).join(', ')}
		</div>
	</div>` })}


	<h4 class="">INVOLVEMENTS</h4>
	<div class="">
		<ul class="boxed-list offset-2 p">
			${jsonData.involvement.organizations.map(function (key) {
						return `
			<li class="offset-2" style="text-decoration-style:disc"> ${key} </li>`
					})}
		</ul>
	</div>
	<h4 class="">EDUCATION</h4>
	<div class="">
		<table cellpadding="10" style="width:100%">
			<thead>

				<tr>
					<th>Degree</th>
					<th>Major</th>
					<th>Institution</th>
					<th>graduation Year</th>
				</tr>
			</thead>
			<tbody>

				<tr>
					${jsonData.education.schools.map(function (key) {
						return `
					<td>${key['degree']}</td>
					<td>${key['major']}</td>
					<td>${key['institution']}</td>
					<td>${key['graduation_year']}</td>

					` })}
				</tr>
			</tbody>


		</table>
	</div>
    <h4 class="">RESEARCH EXPERIENCE</h4>
    
    ${jsonData.research_experience.items.map(function (key) {
							return `<div class="offset-2">
	<p>
		<strong class="title">${key['title']}- ${key['organisation']}</strong>
	</p>
	<div class="offset-2 p"> ${key['points'][0]}
    </div></div>`}).join('')}

</body>`
	}

}
