'use strict';

module.exports = function() {
    return {
        'integration': {
            MODE: 'development',
            PORT: 3001,
            IS_CLUSTER_ENABLED: 0,
            IS_SERVER_LOG_ENABLED: 0,
            IS_MORGAN_ENABLED: 0,
            IS_GRAPHITE_ENABLED: 0
        }
    };
};
