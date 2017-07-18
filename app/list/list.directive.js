'use strict';

angular.module('app.directive', [])
.directive('listItem', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=',
      index: '='
    },
    template: `
      <div class="row">
        <div class="col-md-2 col-sm-3 col-xs-4 item-left">
        	<span class="index pull-left">{{index + 1}}</span>
        	<span class="unvoted pull-left">{{ getFormattedVotes(item.data.ups) }}</span>
          <a href="#" class="thumbnail pull-left">
            <img ng-src="{{ item.data.preview.images[0].source.url }}" alt="No Image">
          </a>
        </div>
        <div class="col-md-10 col-sm-9 col-xs-8 item-right">
          <p class="title">
            <a href="#">{{ item.data.title }}</a>
          </p>
          <p class="sub-title">Submitted {{ getTimeOffset(item.data.created) }} ago by {{ item.data.author }} to {{ item.data.subreddit_name_prefixed }}</p>
          <p class="comments">
            <a href="#">{{ item.data.num_comments }} comments</a>
            <a class="post-sharing-button" href="javascript: void 0;">share</a>
          </p>
        </div>
      </div>
    `,
    link: function(scope, iElement, iAttr) {
      scope.getFormattedVotes = function(vote) {
      	return vote > 10000? Math.floor(vote / 1000) + '.' + Math.floor((vote % 1000) / 100) + 'K' : vote;
      }

      scope.getTimeOffset = function(dateTime) {
      	return moment.unix(dateTime).fromNow(true);
      }
    }
  }
});
