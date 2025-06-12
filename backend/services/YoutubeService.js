const Youtube = require('../models/Youtube');

const countAll = async () => {
	try {
		const count = await Youtube.countDocuments();
		return count;
	} catch (error) {
		console.error('Error counting Youtube documents:', error);
		throw error;
	}
};

const countClean = async () => {
	const targets = ['individual', 'groups', 'religion', 'race', 'politics'];
	const promises = targets.map((target) =>
		Youtube.countDocuments({
			predict: { $regex: `${target}#clean`, $options: 'i' }
		})
	);

	try {
		const counts = await Promise.all(promises);
		const total = counts.reduce((sum, curr) => sum + curr, 0);
		return total;
	} catch (error) {
		console.error('Error in countClean:', error);
		throw error;
	}
};

const countHate = async () => {
	const targets = ['individual', 'groups', 'religion', 'race', 'politics'];
	const queries = targets.map((target) =>
		Youtube.countDocuments({
			predict: { $regex: `${target}#hate`, $options: 'i' }
		})
	);

	try {
		const counts = await Promise.all(queries);
		const total = counts.reduce((sum, val) => sum + val, 0);
		return total;
	} catch (error) {
		console.error('Error in countHate:', error);
		throw error;
	}
};

const countOffensive = async () => {
	const targets = ['individual', 'groups', 'religion', 'race', 'politics'];
	const queries = targets.map((target) =>
		Youtube.countDocuments({
			predict: { $regex: `${target}#offensive`, $options: 'i' }
		})
	);

	try {
		const counts = await Promise.all(queries);
		const total = counts.reduce((sum, val) => sum + val, 0);
		return total;
	} catch (error) {
		console.error('Error in countOffensive:', error);
		throw error;
	}
};

const countIndividual = async () => {
	const levels = ['clean', 'offensive', 'hate'];
	const queries = levels.map((level) =>
		Youtube.countDocuments({
			predict: { $regex: `individual#${level}`, $options: 'i' }
		})
	);

	try {
		const counts = await Promise.all(queries);
		const total = counts.reduce((sum, val) => sum + val, 0);
		return total;
	} catch (error) {
		console.error('Error in countIndividual:', error);
		throw error;
	}
};

const countGroups = async () => {
	const levels = ['clean', 'offensive', 'hate'];
	const queries = levels.map(level =>
		Youtube.countDocuments({ predict: { $regex: `groups#${level}`, $options: 'i' } })
	);

	try {
		const counts = await Promise.all(queries);
		return counts.reduce((sum, val) => sum + val, 0);
	} catch (error) {
		console.error('Error in countGroups:', error);
		throw error;
	}
};

const countReligion = async () => {
	const levels = ['clean', 'offensive', 'hate'];
	const queries = levels.map(level =>
		Youtube.countDocuments({ predict: { $regex: `religion#${level}`, $options: 'i' } })
	);

	try {
		const counts = await Promise.all(queries);
		return counts.reduce((sum, val) => sum + val, 0);
	} catch (error) {
		console.error('Error in countReligion:', error);
		throw error;
	}
};

const countRace = async () => {
	const levels = ['clean', 'offensive', 'hate'];
	const queries = levels.map(level =>
		Youtube.countDocuments({ predict: { $regex: `race#${level}`, $options: 'i' } })
	);

	try {
		const counts = await Promise.all(queries);
		return counts.reduce((sum, val) => sum + val, 0);
	} catch (error) {
		console.error('Error in countRace:', error);
		throw error;
	}
};

const countPolitics= async () => {
	const levels = ['clean', 'offensive', 'hate'];
	const queries = levels.map(level =>
		Youtube.countDocuments({ predict: { $regex: `politics#${level}`, $options: 'i' } })
	);

	try {
		const counts = await Promise.all(queries);
		return counts.reduce((sum, val) => sum + val, 0);
	} catch (error) {
		console.error('Error in countPolitics:', error);
		throw error;
	}
};

const getAllCount = async () => {
	try {
		const [
			all,
			politics,
			race,
			religion,
			groups,
			individual,
			clean,
			offensive,
			hate,
		] = await Promise.all([
			countAll(),
			countPolitics(),
			countRace(),
			countReligion(),
			countGroups(),
			countIndividual(),
			countClean(),
			countOffensive(),
			countHate(),
		]);

		return {
			clean,
			offensive,
			hate,
			individual,
			groups,
			religion,
			race,
			politics,
			all,
		};
	} catch (error) {
		console.error('Error in getAllCount:', error);
		throw error;
	}
};

const getCommentData = async (start = 0, limit = 10) => {
	try {
		const data = await Youtube.find()
			.skip(start)
			.limit(limit);
		return data;
	} catch (error) {
		console.error('Error in getCommentData:', error);
		throw error;
	}
};

module.exports = {countAll, countClean, countHate, countOffensive, countInividual, countGroups, countReligion, countRace, countPolitics, getAllCount, getCommentData};