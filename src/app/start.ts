import { LikeComplonent } from './app/typescript/like.component';

let like = new LikeComplonent(20, true);
like.onClick();
console.log(`likesCount: ${like.likesCounter}, isSelected: ${like.isSelected}`);
