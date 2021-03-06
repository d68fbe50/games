var singlePlayerPrepState = {
	create: function(){
		if(!nowPlaying){
			board = [
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
			];

			boardDisplay = [
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
				[,,,,,,,,,],
			];
			nextWindow = [
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,],
				[,,] 
			];

			holdWindow = [
				[,,],
				[,,],
				[,,],
				[,,] 
			];
			gameover = false;
			softDrop = false;
			hardDrop = false;
			hardDropLock = false;
			cleaningLines = false;
			waitingLineClear = false;
			holdLock = false;
			lineCount = 0;
			speedUpGoal = 10;
			curCombo = 0;
			curScore = 0;
			level = 1;
			tickInterval = 500;
			lastValidMoveWasASpin = false;
			userKeys = loadUserKeys();
		}

		game.state.start('play');
	}
};
