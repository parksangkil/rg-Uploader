module.exports = {
	loading : '' +
		'<li class="loading">' +
			'<div class="wrap">' +
				'<figure class="col not-image">' +
					'<p data-element="progress" style="width: 40%;">' +
						'<span><em>40</em>%</span>' +
					'</p>' +
				'</figure>' +
				'<div class="col bar">' +
					'<p data-element="progress" style="width: 30%;">' +
						'<span><em>30</em>%</span>' +
					'</p>' +
				'</div>' +
				'<div class="col bd">' +
					'<span class="name" data-text="filename">filename.jpg</span>' +
					'<hr>' +
					'<span class="state" data-text="state">uploading..</span>' +
				'</div>' +
			'</div>' +
		'</li>',
	error : '' +
		'<li class="error">' +
			'<div class="wrap">' +
				'<figure class="col not-image"></figure>' +
				'<div class="col bd">' +
					'<span class="filetype bracket large" data-text="filetype">image/jpg</span>' +
					'<span class="name" data-text="filename">filename.jpg</span>' +
					'<hr>' +
					'<span class="state" data-text="state">upload fail</span>' +
				'</div>' +
			'</div>' +
		'</li>',
	complete : '' +
		'<li class="complete">' +
			'<div class="wrap">' +
				'<figure class="col" data-element="previewImage" data-text="filename">filename.jpg</figure>' +
				'<div class="col bd">' +
					'<span class="filetype bracket large" data-text="filetype">image/jpg</span>' +
					'<span class="name" data-text="filename">filename.jpg</span>' +
					'<hr>' +
					'<span class="state" data-text="state">uploaded</span>' +
					'<span class="size bracket" data-text="filesize">123.43kb</span>' +
				'</div>' +
				'<nav class="col" data-element="customButtons"></nav>' +
			'</div>' +
		'</li>'
};