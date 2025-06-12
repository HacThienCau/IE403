import YoutubeService from '../services/YoutubeService.js';

const countAll = async (req, res) => {
	try {
		const count = await YoutubeService.countAll();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countAll' });
	}
};

const countClean = async (req, res) => {
	try {
		const count = await YoutubeService.countClean();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countClean' });
	}
};

const countHate = async (req, res) => {
	try {
		const count = await YoutubeService.countHate();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countHate' });
	}
};

const countOffensive = async (req, res) => {
	try {
		const count = await YoutubeService.countOffensive();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countOffensive' });
	}
};

const countIndividual = async (req, res) => {
	try {
		const count = await YoutubeService.countInividual();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countIndividual'});
	}
};

const countGroups = async (req, res) => {
	try {
		const count = await YoutubeService.countGroups();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countGroups' });
	}
};

const countReligion = async (req, res) => {
	try {
		const count = await YoutubeService.countReligion();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countReligion' });
	}
};

const countRace = async (req, res) => {
	try {
		const count = await YoutubeService.countRace();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countRace' });
	}
};

const countPolitics = async (req, res) => {
	try {
		const count = await YoutubeService.countPolitics();
		res.json(count);
	} catch (error) {
		res.status(500).json({ error: 'Đã xảy ra lỗi khi thực hiện countPolictics' });
	}
};

const getAllCount = async (req, res) => {
	try {
		const result = await YoutubeService.getAllCount();
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: 'Lỗi server khi lấy thống kê.' });
	}
};

const getCommentData = async (req, res) => {
	try {
		const start = Number(req.query.start) || 0;
		const limit = 10;
		const data = await YoutubeService.getCommentData(start, limit);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: 'Lỗi server khi lấy comment data.' });
	}
};

module.exports = {countAll, countClean, countHate, countOffensive, countIndividual, countGroups, countReligion, countRace, countPolitics, getAllCount, getCommentData};