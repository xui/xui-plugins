/**********************************************************************
 * XUI Slider v0.1 - A XUI plugin to slide divs up and down
 * Copyright (C) 2011 Mohammed El-Hakim  - mohammed.elhakim@gmail.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Usage: x$('div').slideUp();
 *        x$('div').slideDown();
 *
 ***********************************************************************/
 
 
 slider = {
	slideUp: function(){
		for(i=0; i<this.length;i++){
			if(x$(this[i]).getStyle('display') == 'none')
				continue;
				
			orig = Array();
			orig['overflow'] = x$(this[i]).getStyle('overflow');
			orig['height'] = x$(this[i]).getStyle('height');
			orig['paddingtop'] = x$(this[i]).getStyle('padding-top');
			orig['paddingbottom'] = x$(this[i]).getStyle('padding-bottom');
			x$(this[i]).setStyle('overflow','hidden');
			
			setBack = function(obj){
				x$(obj).setStyle('display','none');
				x$(obj).setStyle('overflow',orig['overflow']);
				x$(obj).setStyle('height',orig['height']);
				x$(obj).setStyle('paddingTop',orig['paddingtop']);
				x$(obj).setStyle('paddingBottom',orig['paddingbottom']);							
			}
			
			obj = this[i];
			x$(this).setStyle('overflow','hidden');
			x$(this[i]).tween( { padding: '0 ' + x$(obj).getStyle('paddingRight') + ' 0 ' + x$(obj).getStyle('paddingLeft'), height: 0 }, function(){		        			
				 setBack(obj);		        				
			});
		}
	},
	slideDown: function(){
		for(i=0; i<this.length;i++){
			if(x$(this[i]).getStyle('display') != 'none')
				continue;
			
			this[i].style.display = 'block';
			this[i].style.overflow = 'hidden';
			objheight = this[i].offsetHeight - parseInt(x$(this[i]).getStyle('paddingTop')) - parseInt(x$(this[i]).getStyle('paddingBottom'));
			this[i].style.height = 0;
			
			x$(this[i]).tween( { height: objheight }) ;
		}    	    		
	}
}

x$.extend(slider);
