import classes from '../css/number.module.css';
import monthDayCount from '../lib/monthDayCount';

const Number = ({ day, month, year }) => {
    const days = monthDayCount(month, year);

    const arr = [];
    for (let i = 1; i <= days; i += 1) {
        arr.push({ count: i, class: 'active' });
    }

    const li = [];
    for (let i = 0; i < 42; i += 1) {
        li.push({ count: i, class: 'deActive' });
    }
    li.splice(day, days, ...arr);

    console.log(days);

    return (
        <section className={classes.number}>
            <ul>
                {li.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index} className={item.class}>
                        {item.count}
                    </li>
                ))}

                {/* <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li>32</li>
                <li>33</li>
                <li>34</li>
                <li>35</li>
                <li>36</li>
                <li>37</li>
                <li>38</li>
                <li>39</li>
                <li>40</li>
                <li>41</li>
                <li>42</li> */}
            </ul>
        </section>
    );
};

export default Number;
