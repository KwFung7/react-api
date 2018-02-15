let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const portfolioIntroSchema = new Schema({
  message: [{ 
    type: String,
    required: true
  }],
  general: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    birth: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
  },
  experience: {
    type: {
      type: String,
      required: true
    },
    jobs: [{
      id: {
        type: Number,
        required: true
      },
      start: {
        type: Date,
        required: true
      },
      start_for_moment: {
        type: String,
        required: true
      },
      end: {
        type: String,
        required: true
      },
      current: {
        type: Boolean,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      },
      details: [{
        type: String,
        required: true
      }]
    }]
  },
  skill: {
    type: {
      type: String,
      required: true
    },
    details: [{
      type: String,
      required: true
    }]
  },
  education: {
    type: {
      type: String,
      required: true
    },
    details: [{
      period: {
        type: String,
        required: true
      },
      programme: {
        type: String,
        required: true
      },
      school: {
        type: String,
        required: true
      }
    }]
  },
  language: {
    type: {
      type: String,
      required: true
    },
    qualifications: [{
      type: String,
      required: true
    }],
    results: [{
      type: String,
      required: true
    }]
  }
});

module.exports = portfolioIntroSchema;