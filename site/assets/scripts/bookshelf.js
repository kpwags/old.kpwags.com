class Bookshelf
{
    constructor(args)
    {
        this.jsonFile = args.jsonFile;
        this.mode = args.mode;

        this.fetchJson();
    }

    processYear(year, data) {
        let newNode = document.createElement('div');

        newNode.innerHTML = `
            <h3>${year}</h3>
            <div id="list_${year}" class="bookshelf-list"></div>
        `;

        document.getElementById('list_previous').appendChild(newNode);

        data.forEach((item) => {
            let html = '';

            switch (this.mode) {
                case 'books':
                    html = `
                        <div class="item" id="item_${item.cover}">
                            <div class="image">
                                <a href="${item.link}">
                                    <picture>
                                        <source srcset="/assets/images/reading/${item.cover}" media="(min-width: 600px)" />
                                        <img src="/assets/images/1x1.png" alt="${item.title} by ${item.author}" />
                                    </picture>
                                </a>
                            </div>
                            <div class="info">
                                <h3>
                                    <a href="${item.link}">${item.title}</a>
                                </h3>
                                <em>${item.author}</em>
                            </div>
                        </div>
                    `;
                    break;

                case 'movies':
                    html = `
                        <div class="item" id="item_${item.cover}">
                            <div class="image">
                                <a href="${item.link}">
                                    <picture>
                                        <source srcset="/assets/images/movies/${item.cover}" media="(min-width: 600px)" />
                                        <img src="/assets/images/1x1.png" alt="${item.title}" />
                                    </picture>
                                </a>
                            </div>
                            <div class="info">
                                <h3>
                                    <a href="${item.link}">${item.title}</a>
                                </h3>
                                <em>${item.dateWatched}</em>
                            </div>
                        </div>
                    `;
                    break;
            }


            newNode = document.createElement('div');
            newNode.innerHTML = html;
            document.getElementById(`list_${year}`).appendChild(newNode);

            if (item.rating !== null) {
                html = '<div class="rating">';
                for (let i = 0; i < item.rating; i++) {
                    html += '<img src="/assets/images/rating-star.png" alt="star" />';
                }
                html += '</div>';

                newNode = document.createElement('div');
                newNode.innerHTML = html;
                document.getElementById(`item_${item.cover}`).appendChild(newNode);
            }

            if (item.thoughts !== null) {
                html = `
                    <div class="review">
                        <button onclick="toggleReview(this);return false;">View My Thoughts</button>
                        <div style="display: none;">${item.thoughts}</div>
                    </div>
                `;

                newNode = document.createElement('div');
                newNode.innerHTML = html;
                document.getElementById(`item_${item.cover}`).appendChild(newNode);
            }
        });
    }

    processList(data) {
        const years = [];

        Object.keys(data).forEach((key) => {
            switch (key) {
                case 'lastupdate':
                    document.getElementById('lastupdate').innerText = data[key];
                    break;
                default:
                    years.push(parseInt(key));
                    break;
            }
        });

        years.sort();
        years.reverse();

        years.forEach((y) => {
            this.processYear(y, data[y.toString()]);
        });
    }

    fetchJson() {
        let dataJson = new Request(this.jsonFile, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        fetch(dataJson)
            .then((resp) => {
                return resp.json();
            })
            .then((result) => {
                this.processList(result);
            });
    }
}