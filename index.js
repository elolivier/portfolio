$(function () {
	$.getJSON("data.json", function(data) {
		fillLeftColumn(data);
		//send an email
		$('a[data-mail]').on('click', function() {
		   window.location = 'mailto:' + $(this).data('mail')+'@gmail.com' + '?subject=Job Offer';
		});
		//call to cellphone
		$( "#cel strong" ).text(function () {
		  $( this ).replaceWith( '<a href="tel:' + $( this ).text() + '">' + $( this ).text() + "</a>" );
		});
		fillRightColumn(data);
		//manage links
		$('footer i.fa-github').on('click', function() {
			window.location = 'https://github.com/elolivier';
		});
		$('footer i.fa-instagram').on('click', function() {
			window.location = 'https://www.instagram.com/eolivier79/';
		});
		$('footer i.fa-twitter').on('click', function() {
			window.location = 'https://twitter.com/ernesto_olivier';
		});
		$('footer i.fa-linkedin').on('click', function() {
			window.location = 'https://www.linkedin.com/in/ernesto-olivier-a2742422';
		});
	});
});

function fillLeftColumn(data) {
	$('title, #name').html(data.name + ' ' + data.lastname);
	$('#profession').append(data.profession);
	$('#home').append(data.hometown);
	$('#mail').append('<a href="#" data-mail="ernesto.olivier">' + data.email + '</a>');
	$('#cel').append('<strong>' + data.cel + '</strong>');
	$('#skills').html(fillSkills(data));
	$('#languages').html(fillLanguages(data));
	$('#awards').html(fillAwards(data));
}

function fillRightColumn(data) {
	$('#work-experience').append(fillWorkExperience(data));
	$('#education').append(fillEducation(data));
}

function fillSkills(data) {
	let filling = '';
	$(data.skills).each(function(i, eachSkill) {
		filling += '<p>' + eachSkill.skill + '</p>';
		filling += '<div class="w3-light-grey w3-round-xlarge w3-small">';
        filling += '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:';
        filling += + eachSkill.pct + '%">' + eachSkill.pct + '%</div></div>';
	});
	return filling;
}

function fillLanguages(data) {
	let filling = '';
	$(data.languages).each(function(i, eachLanguage) {
		filling += '<p>' + eachLanguage.language + '</p>';
		filling += '<div class="w3-light-grey w3-round-xlarge">';
		filling += '<div class="w3-round-xlarge w3-teal" style="height:18px;width:';
		filling += eachLanguage.pct + '%"></div></div>';
	}); 
	return filling;
}

function fillAwards(data) {
	let filling = '';
	$(data.awards).each(function(i, eachAward) {
		filling += '<p>' + eachAward.year + ' ' + eachAward.award + '</p>';
	}); 
	return filling;
}

function fillWorkExperience(data) {
	let filling = '';
	$(data.work).each(function(i, eachWork) {
		filling += '<div class="w3-container"><h5 class="w3-opacity"><b>' + eachWork.position + ' / ' + eachWork.organization + '</b></h5>';
		filling += '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>';
		filling += eachWork.from + ' - ';
		if (eachWork.to == "Current") {
			filling += '<span class="w3-tag w3-teal w3-round">Current</span></h6>';
		}else {
			filling += eachWork.to + '</h6>';
		}
		filling += '<ul>';
		$(eachWork.achivments).each(function(j, eachAchivment) {
			filling += '<li>' + eachAchivment + '</li>';
		});
		filling += '</ul><hr></div>';
	});
	return filling;
}

function fillEducation(data) {
	let filling = '';
	$(data.education).each(function(i, eachCareer) {
		filling += '<div class="w3-container"><h5 class="w3-opacity"><b>';
		filling += eachCareer.school + '</b></h5>' + '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>';
		filling += eachCareer.from + ' - ' + eachCareer.to + '</h6><p>' + eachCareer.degree + '</p><hr></div>';
	});
	return filling;
}